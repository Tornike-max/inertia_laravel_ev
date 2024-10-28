import { Comment } from "@/types";
import { useForm } from "@inertiajs/react";
import React from "react";
import Button from "./Button";

const EditComment = ({ comment }: { comment: Comment }) => {
    const { setData, processing, put } = useForm({
        content: comment.content || "",
    });
    const handleUpdateComment = (id: number) => {
        put(route("evacuator.comment.update", id));
    };

    return (
        <form onSubmit={() => handleUpdateComment(comment?.id)}>
            <textarea
                className="w-full border-gray-300 rounded-md shadow-sm h-[70px] mt-2"
                onChange={(e) => setData("content", e.target.value)}
                rows={4}
                defaultValue={comment?.content}
            ></textarea>
            <div className="w-full flex justify-start items-center">
                <Button
                    className=" ml-1 px-4 py-2 bg-teal-600 text-white rounded-lg bg-light duration-150 transition-all hover:bg-teal"
                    type="submit"
                    disabled={processing}
                >
                    {processing ? "დაელოდეთ" : "შესწორება"}
                </Button>
            </div>
        </form>
    );
};

export default EditComment;
