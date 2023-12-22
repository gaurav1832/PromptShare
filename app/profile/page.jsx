"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@/components/Profile";

const MyProfile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [myposts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await resp.json();
      setMyPosts(data);
    };
    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete the prompt?");

    if (hasConfirmed) {
      try {
        await fetch(`/api/prompt/${post._id.toString()}`, {
          method: "DELETE",
        });
        const filteredPosts = myposts.filter((item) => item._id !== post._id);
        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Profile
        name="My"
        desc="Welcome to your profile !"
        data={myposts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default MyProfile;
