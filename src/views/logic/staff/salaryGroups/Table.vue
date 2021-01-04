<template>
  <div>
    <Row style="background: #fff; padding: 16px; margin: 16px">
      <router-link to="/salaryGroups/create">
        <a-button type="primary">
          {{ t('routes.logic.staff.salaryGroups.table.create') }}
        </a-button>
      </router-link>
    </Row>

    <CustomTable @register="registerTable">
      <template #action="{ record }">
        <TableAction :actions="createActions(record)" />
      </template>

      <template #staff="{ record }">
        <template v-if="record.group === 1">
Все курьеры
</template>
        <template v-else-if="record.group === 2">
Все операторы
</template>
        <template v-else-if="record.group === 3">
Все ответственные
</template>
        <template v-else>
          <div v-if="record.drivers.length > 0" class="mb-1">
            <a-popover>
              <template #content>
                <router-link
                  v-for="driver in record.drivers"
                  :key="driver.id"
                  :to="`/drivers/${driver.id}`"
                >
                  <a-tag variant="info">
                    {{ driver.name }}
                  </a-tag>
                </router-link>
              </template>
              <a-button size="small"> Курьеры: {{ record.drivers.length }} </a-button>
            </a-popover>
          </div>
          <div v-if="record.operators.length > 0" class="mb-1">
            <a-popover>
              <template #content>
                <router-link
                  v-for="operator in record.operators"
                  :key="operator.id"
                  :to="`/operators/${operator.id}`"
                >
                  <a-tag variant="info">
                    {{ operator.name }}
                  </a-tag>
                </router-link>
              </template>
              <a-button size="small"> Операторы: {{ record.operators.length }} </a-button>
            </a-popover>
          </div>
          <div v-if="record.stokers.length > 0">
            <a-popover>
              <template #content>
                <router-link
                  v-for="stoker in record.stokers"
                  :key="stoker.id"
                  :to="`/stokers/${stoker.id}`"
                >
                  <a-tag variant="info">
                    {{ stoker.client.name }}
                  </a-tag>
                </router-link>
              </template>
              <a-button size="small"> Ответственные: {{ record.operators.length }} </a-button>
            </a-popover>
          </div>
        </template>
      </template>

      <template #displayValue="{ record }">
        {{ record.display_value }}({{ record.divide_type_readable.toLowerCase() }})
      </template>

      <template #active="{ record }">
        <Icon v-if="record.active" icon="carbon:checkbox-checked-filled" />
        <Icon v-else icon="carbon:checkbox-indeterminate-filled" />
      </template>

      <template #locations="{ record }">
        <Locations :locations="record.locations" :empty-is-all="true" :name-by-chain="false" />
      </template>
    </CustomTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { CustomTable, useTable, TableAction, ActionItem } from '/@/components/Table';
  import { getColumns, getFormConfig } from '/@/views/logic/staff/salaryGroups/tableData';
  import { useRouter } from 'vue-router';

  import { deleteSalaryGroup, getSalaryGroups } from '/@/api/logic/salaryGroup/requests';
  import { locationStore } from '/@/store/modules/location';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { Tag, Row } from 'ant-design-vue';
  import { SalaryGroup } from '/@/api/logic/salaryGroup/model';

  import { Button } from '/@/components/Button';
  import Icon from '/@/components/Icon';
  import { Popover } from 'ant-design-vue';

  import Locations from '../common/components/Locations.vue';

  import { tableSettings, createCommonActions } from '../common/table';
  import { staffStore } from '/@/store/modules/staff';

  export default defineComponent({
    components: {
      CustomTable,
      TableAction,
      ATag: Tag,
      Row,
      AButton: Button,
      APopover: Popover,
      Locations,
      Icon,
    },
    setup() {
      const { t } = useI18n();
      const { push } = useRouter();

      locationStore.loadListForSelect();
      staffStore.loadListForSelect();

      const [registerTable, { reload }] = useTable({
        title: t('routes.logic.staff.salaryGroups.table.header'),
        api: getSalaryGroups,
        columns: getColumns(),
        formConfig: getFormConfig(),
        filtersStorageKey: 'salaryGroupsFilters',
        pageStorageKey: 'salaryGroupsPage',
        sortStorageKey: 'salaryGroupsSort',

        ...tableSettings,
      });

      const createActions = (record: SalaryGroup): ActionItem[] => {
        return createCommonActions(
          record.id,
          () => push(`/salaryGroups/${record.id}`),
          deleteSalaryGroup,
          reload
        );
      };

      return {
        registerTable,
        createActions,
        t,
      };
    },
  });
</script>
