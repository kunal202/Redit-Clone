import React from "react";
import { Box, IconButton, Link } from "@chakra-ui/core";
import { EditIcon, DeleteIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useDeletePostMutation, useMeQuery } from "../generated/graphql";

interface EditDeletePostButton {
  id: number;
  creatorId: number;
}

const EditDeletePostButton: React.FC<EditDeletePostButton> = ({
  id,
  creatorId,
}) => {
  const { data: meData } = useMeQuery();
  const [deletePost] = useDeletePostMutation();

  if (meData?.me?.id !== creatorId) {
    return null;
  }
  return (
    <Box ml="auto">
      <NextLink href="/post/edit/[id]" as={`/post/edit/${id}`}>
        <IconButton
          as={Link}
          ml="auto"
          mr={4}
          icon={<EditIcon />}
          aria-label="Edit Post"
        />
      </NextLink>
      <IconButton
        ml="auto"
        aria-label="Delete Post"
        icon={<DeleteIcon />}
        onClick={() => {
          deletePost({
            variables: { id },
            update: (cache) => {
              cache.evict({ id: "Post:" + id });
            },
          });
        }}
      />
    </Box>
  );
};

export default EditDeletePostButton;
