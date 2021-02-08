import { Field, Form, Formik } from "formik";
import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import css from "./Dialogs.module.css";
import Message from "./message/Message";

const Dialogs = (props) => {
  let messageElements = props.messages.map((mess) => (
    <Message message={mess.message} key={mess.id} />
  ));

  let dialogElements = props.dialogs.map((dialog) => (
    <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} />
  ));

  const sendMessage = (message) => {
    props.sendMessage(message);
  };

  return (
    <div className={css.dialogs}>
      <div className={css.dialogsItems}>{dialogElements}</div>

      <div className={css.messages}>
        {messageElements}
        <SendMessageForm onSubmit={sendMessage} />
      </div>
    </div>
  );
};

class SendMessageForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={{ newMessage: "" }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          // запрос на сервер
          this.props.onSubmit(data.newMessage);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ values, handleSubmit, handleReset, isSubmitting }) => {
          return (
            <Form className={css.form} onSubmit={handleSubmit}>
              <Field
                className={css.newMessage}
                name="newMessage"
                placeholder="O, hi Mark!"
                as="textarea"
              />

              <button
                name="submit"
                type="submit"
                disabled={isSubmitting}
                className={css.btn}
              >
                Send
              </button>
              <button
                name="reset"
                type="reset"
                className={css.btn}
                onClick={handleReset}
              >
                Clear
              </button>

              <pre>{JSON.stringify(values)}</pre>
            </Form>
          );
        }}
      </Formik>
    );
  }
}

export default Dialogs;
