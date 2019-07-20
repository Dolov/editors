import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import CKEditor4 from '@/components/CKEditor4'
import CKEditor5 from '@/components/CKEditor5'
import BraftEditor from '@/components/BraftEditor'
import DraftJs from '@/components/DraftJs'
import QuillEditor from '@/components/ReactQuill'
import TinyEditor from '@/components/TinyEditor'
import TrixEditor from '@/components/TrixEditor'
import FroalaEditor from '@/components/FroalaEditor'
import PellEditor from '@/components/PellEditor'
import MediumEditor from '@/components/MediumEditor'
import styles from './index.less'

const { TabPane } = Tabs;

console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')

function callback(key: string) {
  console.log(key);
}

export default () => (
  <Tabs className={styles.tabs} defaultActiveKey="1" onChange={callback}>
    <TabPane tab="CKEditor4" key="1">
      <CKEditor4 />
    </TabPane>
    <TabPane tab="CKEditor5" key="2">
      <CKEditor5 />
    </TabPane>
    <TabPane tab="Braft-Editor" key="3">
      <BraftEditor />
    </TabPane>
    <TabPane tab="Draft-Js" key="4">
      <DraftJs />
    </TabPane>
    <TabPane tab="React-Quill" key="5">
      <QuillEditor />
    </TabPane>
    <TabPane tab="Trix" key="7">
      <TrixEditor />
    </TabPane>
    <TabPane tab="Tiny" key="6">
      <TinyEditor />
    </TabPane>
    <TabPane tab="Froala" key="8">
      <FroalaEditor />
    </TabPane>
    <TabPane tab="Pell" key="9">
      <PellEditor />
    </TabPane>
    <TabPane tab="MediumEditor" key="10">
      <MediumEditor />
    </TabPane>
  </Tabs>
)
