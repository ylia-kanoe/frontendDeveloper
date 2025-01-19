import React from 'react';
import { Button, Form, Input } from 'antd';
import styles from './EditCard.module.scss';
import { EditCardType } from './types';
import { repositoryStore } from 'src/store/repository';

export function EditCard({ id, owner, onSave }: EditCardType) {
  const [form] = Form.useForm();

  const onFinish = ({ login, url }: { login: string, url: string }) => {
    repositoryStore.editData({ id, owner: { login, url, avatar_url: owner.avatar_url } })
    onSave(false)
  };

  return (
    <div>
      <Form
        layout={"inline"}
        form={form}
        onFinish={onFinish}
        initialValues={{ login: owner.login, url: owner.url }}
      >
        <Form.Item label="Логин" name="login" >
          <Input />
        </Form.Item>
        <Form.Item label="Ссылка на git" name="url">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button className={styles.button} type="primary" onClick={() => form.submit()}>Сохранить</Button>
        </Form.Item>
      </Form>
    </div>
  );
};
