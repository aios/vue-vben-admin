import { defineComponent } from 'vue';
import { Tabs, Row, Col, Progress, Divider } from 'ant-design-vue';
import { CollapseContainer } from '/@/components/Container/index';
import TrendLine from './TrendLine.vue';
import './flow-ana.less';
const prefixCls = 'flow-analysis';
export default defineComponent({
  name: 'AnalysisFLow',
  setup() {
    const renderContent = () => {
      return (
        <Row>
          {() => (
            <>
              <Col md={24} lg={8}>
                {() => (
                  <CollapseContainer
                    title="__Some-New-Token__"
                    canExpan={false}
                    class={`${prefixCls}__left`}
                  >
                    {() => (
                      <div>
                        <div class={`${prefixCls}__score`}>
                          86.2<span>__Some-New-Token__</span>
                        </div>
                        <div class={`${prefixCls}__rank`}>
                          __Some-New-Token__<span>__Some-New-Token__20%</span>
                        </div>
                        <Progress percent={70} showInfo={false} status="active" />
                        <Divider />

                        <ul class={`${prefixCls}__rs`}>
                          <li>
                            <span>__Some-New-Token__</span>
                            <span>77.5</span>
                          </li>
                          <li>
                            <span>__Some-New-Token__</span>
                            <span>99.5</span>
                          </li>
                          <li>
                            <span>__Some-New-Token__</span>
                            <span>56.5</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </CollapseContainer>
                )}
              </Col>
              <Col md={24} lg={16}>
                {() => (
                  <CollapseContainer title="__Some-New-Token__" canExpan={false}>
                    {() => <TrendLine />}
                  </CollapseContainer>
                )}
              </Col>
            </>
          )}
        </Row>
      );
    };
    return () => (
      <Tabs class={prefixCls} default-active-key="1">
        {() => [
          <Tabs.TabPane key="1" tab="__Some-New-Token__">
            {() => renderContent()}
          </Tabs.TabPane>,
          <Tabs.TabPane key="2" tab="__Some-New-Token__">
            {() => renderContent()}
          </Tabs.TabPane>,
          <Tabs.TabPane key="3" tab="__Some-New-Token__">
            {() => renderContent()}
          </Tabs.TabPane>,
        ]}
      </Tabs>
    );
  },
});
