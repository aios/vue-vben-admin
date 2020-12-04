<template>
  <div class="login">
    <div class="login-mask" />
    <div class="login-form-wrap">
      <div class="login-form mx-6">
        <AppLocalePicker v-if="showLocale" class="login-form__locale" />
        <div class="login-form__content px-2 py-10">
          <header>
            <img :src="logo" class="mr-4" alt="" />
            <h1>{{ title }}</h1>
          </header>
          <a-form ref="formRef" class="mx-auto mt-10">
            <!--<a-form-item name="account">-->
            <!--<a-input v-model:value="formData.account" size="large" placeholder="username: vben" />-->
            <!--</a-form-item>-->
            <!--<a-form-item name="password">-->
            <!--<a-input-password-->
            <!--v-model:value="formData.password"-->
            <!--size="large"-->
            <!--visibility-toggle-->
            <!-- placeholder="password: 123456"-->
            <!-- />-->
            <!-- </a-form-item>-->

            <!--            &lt;!&ndash;
            <a-form-item v-if="openLoginVerify" name="verify">
              <BasicDragVerify ref="verifyRef" v-model:value="formData.verify" />
            </a-form-item>
            &ndash;&gt;-->
            <a-row>
              <a-col :span="8" />
              <a-col :id="'telegram_auth'" :span="8" />
              <a-col :span="8" />
            </a-row>
          </a-form>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, nextTick, onMounted, reactive, ref, toRaw, unref } from 'vue';

  // import { Checkbox } from 'ant-design-vue';

  // import { Button } from '/@/components/Button';
  import { AppLocalePicker } from '/@/components/Application';
  // import { BasicDragVerify, DragVerifyActionType } from '/@/components/Verify/index';
  // import { appStore } from '/@/store/modules/app';
  import { useMessage } from '/@/hooks/web/useMessage';
  import queryString from 'query-string';
  import { useGlobSetting, useProjectSetting } from '/@/hooks/setting';
  import logo from '/@/assets/images/logo.png';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useScript } from '/@/hooks/web/useScript';
  import { userStore } from '/@/store/modules/user';

  export default defineComponent({
    components: {
      //  BasicDragVerify,
      // AButton: Button,
      // ACheckbox: Checkbox,
      AppLocalePicker,
    },
    setup() {
      const formRef = ref<any>(null);
      const autoLoginRef = ref(false);
      const globSetting = useGlobSetting();
      const { locale } = useProjectSetting();
      const { notification } = useMessage();
      const { t } = useI18n();

      // const openLoginVerifyRef = computed(() => appStore.getProjectConfig.openLoginVerify);
      const formData = reactive({
        account: 'vben',
        password: '123456',
        // verify: undefined,
      });
      const formState = reactive({
        loading: false,
      });

      const urlParams = reactive({
        location: location,
      });

      const { toPromise } = useScript(
        {
          src: 'https://telegram.org/js/telegram-widget.js?14',
        },
        {
          'telegram-login': globSetting.telegramBotName,
          size: 'large',
          userpic: 'true',
          'auth-url': globSetting.telegramCallback,
          'request-access': 'write',
        }
      );

      onMounted(() => {
        handleTgLogin();

        nextTick(() => {
          init();
        });
      });

      function init() {
        toPromise().then(() => {
          setTimeout(() => {
            //alert(1);
          }, 0);
        });
      }

      const formRules = reactive({
        account: [{ required: true, message: t('sys.login.accountPlaceholder'), trigger: 'blur' }],
        password: [
          { required: true, message: t('sys.login.passwordPlaceholder'), trigger: 'blur' },
        ],
        // verify: unref(openLoginVerifyRef) ? [{ required: true, message: '请通过验证码校验' }] : [],
      });

      async function handleTgLogin() {
        const params = queryString.parseUrl(urlParams.location.href);
        if (Object.keys(params.query).length < 2) {
          return;
        }
        const form = unref(formRef);
        if (!form) return;
        formState.loading = true;

        try {
          const userInfo = await userStore.loginTg(params.query);

          if (userInfo) {
            notification.success({
              message: t('sys.login.loginSuccessTitle'),
              description: t('sys.login.loginSuccessDesc', { name: userInfo.realName }),
              duration: 3,
            });
          }
        } catch (error) {
        } finally {
          // resetVerify();
          formState.loading = false;
        }
      }

      async function handleLogin() {
        const form = unref(formRef);
        if (!form) return;
        formState.loading = true;
        try {
          const data = await form.validate();
          const userInfo = await userStore.login(
            toRaw({
              password: data.password,
              username: data.account,
            })
          );
          if (userInfo) {
            notification.success({
              message: t('sys.login.loginSuccessTitle'),
              description: `${t('sys.login.loginSuccessDesc')}: ${userInfo.realName}`,
              duration: 3,
            });
          }
        } catch (error) {
        } finally {
          // resetVerify();
          formState.loading = false;
        }
      }

      return {
        formRef,
        // verifyRef,
        formData,
        formState,
        formRules,
        login: handleLogin,
        autoLogin: autoLoginRef,
        // openLoginVerify: openLoginVerifyRef,
        title: globSetting && globSetting.title,
        logo,
        t,
        showLocale: locale.show,
      };
    },
  });
</script>
<style lang="less">
  @import (reference) '../../../design/index.less';

  .login-form__locale {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 1;
  }

  .login {
    position: relative;
    height: 100vh;
    background: url(../../../assets/images/login/login-bg.png) no-repeat;
    background-size: 100% 100%;

    &-mask {
      display: none;
      height: 100%;
      background: url(../../../assets/images/login/login-in.png) no-repeat 30% 30%;
      background-size: 80% 80%;

      .respond-to(xlarge, {
      display: block;
    });
    }

    &-form {
      position: relative;
      bottom: 60px;
      width: 400px;
      background: @white;
      border: 8px solid rgba(255, 255, 255, 0.5);
      border-radius: 4px;
      background-clip: padding-box;
      .respond-to(xlarge, {
      margin: 0 120px 0 50px
    });

      &-wrap {
        position: absolute;
        top: 0;
        right: 0;
        display: flex;
        width: 100%;
        height: 100%;
        // height: 90%;
        justify-content: center;
        align-items: center;
        .respond-to(xlarge, {
        justify-content: flex-end;
      });
      }

      &__content {
        position: relative;
        width: 100%;
        height: 100%;
        padding: 60px 0 40px 0;
        border: 1px solid #999;
        border-radius: 2px;

        header {
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            display: inline-block;
            width: 48px;
          }

          h1 {
            margin-bottom: 0;
            font-size: 24px;
            text-align: center;
          }
        }

        form {
          width: 80%;
        }
      }
    }
  }
</style>
