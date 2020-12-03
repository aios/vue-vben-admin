<template>
  <BasicModal
    width="800px"
    :title="t('component.upload.upload')"
    :okText="t('component.upload.save')"
    v-bind="$attrs"
    @register="register"
    @ok="handleOk"
    :closeFunc="handleCloseFunc"
    :maskClosable="false"
    :keyboard="false"
    wrapClassName="upload-modal"
    :okButtonProps="getOkButtonProps"
    :cancelButtonProps="{ disabled: isUploadingRef }"
  >
    <template #centerdFooter>
      <a-button
        @click="handleStartUpload"
        color="success"
        :disabled="!getIsSelectFile"
        :loading="isUploadingRef"
      >
        {{ getUploadBtnText }}
      </a-button>
    </template>
    <div class="upload-modal-toolbar">
      <Alert :message="getHelpText" type="info" banner class="upload-modal-toolbar__text"></Alert>
      <Upload
        :accept="getStringAccept"
        :multiple="multiple"
        :before-upload="beforeUpload"
        class="upload-modal-toolbar__btn"
      >
        <a-button type="primary"> {{ t('component.upload.choose') }} </a-button>
      </Upload>
    </div>
    <FileList :dataSource="fileListRef" :columns="columns" :actionColumn="actionColumn" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRefs, unref, computed } from 'vue';
  import { Upload, Alert } from 'ant-design-vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  //   import { BasicTable, useTable } from '/@/components/Table';
  // hooks
  import { useUploadType } from './useUpload';
  import { useMessage } from '/@/hooks/web/useMessage';
  //   types
  import { FileItem, UploadResultStatus } from './types';
  import { basicProps } from './props';
  import { createTableColumns, createActionColumn } from './data';
  // utils
  import { checkFileType, checkImgType, getBase64WithFile } from './utils';
  import { buildUUID } from '/@/utils/uuid';
  import { createImgPreview } from '/@/components/Preview/index';
  import { uploadApi } from '/@/api/sys/upload';
  import { isFunction } from '/@/utils/is';
  import { warn } from '/@/utils/log';
  import FileList from './FileList';

  import { useI18n } from '/@/hooks/web/useI18n';
  export default defineComponent({
    components: { BasicModal, Upload, Alert, FileList },
    props: basicProps,
    setup(props, { emit }) {
      //   是否正在上传
      const { t } = useI18n();

      const isUploadingRef = ref(false);
      const fileListRef = ref<FileItem[]>([]);
      const state = reactive<{ fileList: FileItem[] }>({
        fileList: [],
      });

      const [register, { closeModal }] = useModalInner();

      const { accept, helpText, maxNumber, maxSize } = toRefs(props);
      const { getAccept, getStringAccept, getHelpText } = useUploadType({
        acceptRef: accept,
        helpTextRef: helpText,
        maxNumberRef: maxNumber,
        maxSizeRef: maxSize,
      });

      const { createMessage } = useMessage();

      const getIsSelectFile = computed(() => {
        return (
          fileListRef.value.length > 0 &&
          !fileListRef.value.every((item) => item.status === UploadResultStatus.SUCCESS)
        );
      });

      const getOkButtonProps = computed(() => {
        const someSuccess = fileListRef.value.some(
          (item) => item.status === UploadResultStatus.SUCCESS
        );
        return {
          disabled: isUploadingRef.value || fileListRef.value.length === 0 || !someSuccess,
        };
      });

      const getUploadBtnText = computed(() => {
        const someError = fileListRef.value.some(
          (item) => item.status === UploadResultStatus.ERROR
        );
        return isUploadingRef.value
          ? t('component.upload.uploading')
          : someError
          ? t('component.upload.reUploadFailed')
          : t('component.upload.startUpload');
      });

      // __Some-New-Token__
      function beforeUpload(file: File) {
        const { size, name } = file;
        const { maxSize } = props;
        const accept = unref(getAccept);

        // __Some-New-Token__，__Some-New-Token__
        if (maxSize && file.size / 1024 / 1024 >= maxSize) {
          createMessage.error(t('component.upload.maxSizeMultiple', [maxSize]));
          return false;
        }

        // __Some-New-Token__,__Some-New-Token__
        if (accept.length > 0 && !checkFileType(file, accept)) {
          createMessage.error!(t('acomponent.upload.cceptUpload', [accept.join(',')]));
          return false;
        }
        const commonItem = {
          uuid: buildUUID(),
          file,
          size,
          name,
          percent: 0,
          type: name.split('.').pop(),
        };
        // __Some-New-Token__
        if (checkImgType(file)) {
          // beforeUpload，__Some-New-Token__
          // file.thumbUrl = await getBase64(file);
          getBase64WithFile(file).then(({ result: thumbUrl }) => {
            fileListRef.value = [
              ...unref(fileListRef),
              {
                thumbUrl,
                ...commonItem,
              },
            ];
          });
        } else {
          fileListRef.value = [...unref(fileListRef), commonItem];
        }
        return false;
      }
      // __Some-New-Token__
      function handleRemove(record: FileItem) {
        const index = fileListRef.value.findIndex((item) => item.uuid === record.uuid);
        index !== -1 && fileListRef.value.splice(index, 1);
      }

      // __Some-New-Token__
      function handlePreview(record: FileItem) {
        const { thumbUrl = '' } = record;
        createImgPreview({
          imageList: [thumbUrl],
        });
      }

      async function uploadApiByItem(item: FileItem) {
        const { api } = props;
        if (!api || !isFunction(api)) {
          return warn('upload api must exist and be a function');
        }
        try {
          item.status = UploadResultStatus.UPLOADING;

          const { data } = await uploadApi(
            {
              ...(props.uploadParams || {}),
              file: item.file,
            },
            function onUploadProgress(progressEvent: ProgressEvent) {
              const complete = ((progressEvent.loaded / progressEvent.total) * 100) | 0;
              item.percent = complete;
            }
          );
          item.status = UploadResultStatus.SUCCESS;
          item.responseData = data;
          return {
            success: true,
            error: null,
          };
        } catch (e) {
          console.log(e);
          item.status = UploadResultStatus.ERROR;
          return {
            success: false,
            error: e,
          };
        }
      }

      // __Some-New-Token__
      async function handleStartUpload() {
        const { maxNumber } = props;
        if (fileListRef.value.length > maxNumber) {
          return createMessage.warning(t('component.upload.maxNumber', [maxNumber]));
        }
        try {
          isUploadingRef.value = true;
          // __Some-New-Token__
          const uploadFileList =
            fileListRef.value.filter((item) => item.status !== UploadResultStatus.SUCCESS) || [];
          const data = await Promise.all(
            uploadFileList.map((item) => {
              return uploadApiByItem(item);
            })
          );
          isUploadingRef.value = false;
          // __Some-New-Token__:__Some-New-Token__
          const errorList = data.filter((item: any) => !item.success);
          if (errorList.length > 0) throw errorList;
        } catch (e) {
          isUploadingRef.value = false;
          throw e;
        }
      }

      //   __Some-New-Token__
      function handleOk() {
        const { maxNumber } = props;

        if (fileListRef.value.length > maxNumber) {
          return createMessage.warning(t('component.upload.maxNumber', [maxNumber]));
        }
        if (isUploadingRef.value) {
          return createMessage.warning(t('component.upload.saveWarn'));
        }
        const fileList: string[] = [];

        for (const item of fileListRef.value) {
          const { status, responseData } = item;
          if (status === UploadResultStatus.SUCCESS && responseData) {
            fileList.push(responseData.url);
          }
        }
        // __Some-New-Token__
        if (fileList.length <= 0) {
          return createMessage.warning(t('component.upload.saveError'));
        }
        fileListRef.value = [];
        closeModal();
        emit('change', fileList);
      }

      // __Some-New-Token__：__Some-New-Token__，__Some-New-Token__
      function handleCloseFunc() {
        if (!isUploadingRef.value) {
          fileListRef.value = [];
          return true;
        } else {
          createMessage.warning(t('component.upload.uploadWait'));
          return false;
        }
      }

      //   const [registerTable] = useTable({
      //     columns: createTableColumns(),
      //     actionColumn: createActionColumn(handleRemove, handlePreview),
      //     pagination: false,
      //     inset: true,
      //     scroll: {
      //       y: 3000,
      //     },
      //   });
      return {
        columns: createTableColumns(),
        actionColumn: createActionColumn(handleRemove, handlePreview),
        register,
        closeModal,
        getHelpText,
        getStringAccept,
        getOkButtonProps,
        beforeUpload,
        // registerTable,
        fileListRef,
        state,
        isUploadingRef,
        handleStartUpload,
        handleOk,
        handleCloseFunc,
        getIsSelectFile,
        getUploadBtnText,
        t,
      };
    },
  });
</script>
<style lang="less">
  .upload-modal {
    .ant-upload-list {
      display: none;
    }

    .ant-table-wrapper .ant-spin-nested-loading {
      padding: 0;
    }

    &-toolbar {
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      &__btn {
        margin-left: 8px;
        text-align: right;
        flex: 1;
      }
    }
  }
</style>
