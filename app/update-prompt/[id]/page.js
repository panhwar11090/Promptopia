import React from "react";
import UpdatePrompt from "../page";
import { useRouter } from "next/router";

const UpdatePromptPage = () => {
  const router = useRouter();
  const { id } = router.query; // Extract the id from the URL

  if (!id) {
    return <div>Loading...</div>; // Show a loading state if the id is not yet available
  }

  return <UpdatePrompt promptId={id} />;
};

export default UpdatePromptPage;