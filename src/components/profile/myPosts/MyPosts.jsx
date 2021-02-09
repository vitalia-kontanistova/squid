import { Field, Form, Formik } from "formik";
import React from "react";
import css from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.postData.map((post) => (
    <Post message={post.message} likes={post.likes} key={post.id} />
  ));

  let sendPost = (post) => {
    props.sendPost(post);
  };

  return (
    <div className={css.posts}>
      <div className={css.postsTitle}>My posts</div>
      <SendPostForm onSubmit={sendPost} />
      {postElements}
    </div>
  );
};

const SendPostForm = (props) => {
  return (
    <Formik
      initialValues={{ newPost: "" }}
      onSubmit={(data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        props.onSubmit(data.newPost);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ values, handleSubmit, handleReset, isSubmitting }) => {
        return (
          <Form className={css.form} onSubmit={handleSubmit}>
            <Field
              className={css.newPost}
              name="newPost"
              placeholder="O, hi Mark!"
              as="textarea"
            />
            <button
              name="submit"
              type="submit"
              className={css.btn}
              disabled={isSubmitting}
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
};

export default MyPosts;
