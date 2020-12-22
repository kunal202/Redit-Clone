import React from "react";
import { Box, Button } from "@chakra-ui/core";
import { Formik, Form } from "formik";
import { InputField } from "../../../components/InputField";
import { Layout } from "../../../components/Layout";
import { Wrapper } from "../../../components/Wrapper";
import {
  usePostQuery,
  useUpdatePostMutation,
} from "../../../generated/graphql";
import { useGetIntId } from "../../../utils/useGetIntId";
import { useRouter } from "next/router";
import { withApollo } from "../../../utils/withApollo";

const EditPost = ({}) => {
  const intId = useGetIntId();
  const router = useRouter();
  const { data, loading } = usePostQuery({
    skip: intId === -1,
    variables: {
      id: intId,
    },
  });
  const [updatePost] = useUpdatePostMutation();

  if (loading) {
    return (
      <Layout>
        <div>...loading</div>
      </Layout>
    );
  }

  if (!data?.post) {
    return (
      <Layout>
        <Box>could not find the post</Box>
      </Layout>
    );
  }

  return (
    <Layout variant="small">
      <Wrapper variant={"small"}>
        <Formik
          initialValues={{ title: data.post.title, text: data.post.text }}
          onSubmit={async (values) => {
            await updatePost({ variables: { id: intId, ...values } });
            router.back();
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputField name="title" label="Title" placeholder="title" />
              <Box mt={4}>
                <InputField
                  textarea
                  name="text"
                  label="Body"
                  placeholder="text..."
                  type="password"
                />
              </Box>
              <Button
                mt={4}
                type="submit"
                isLoading={isSubmitting}
                colorScheme="teal"
              >
                Update Post
              </Button>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Layout>
  );
};

export default withApollo({ ssr: false })(EditPost);
