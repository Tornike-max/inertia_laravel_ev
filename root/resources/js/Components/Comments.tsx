import {
    HiOutlineArrowLeft,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";
import Button from "./Button";
import { Comment, User } from "@/types";
import { useForm } from "@inertiajs/react";
import EditComment from "./EditComment";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

type CommentType = {
    content: string;
    id: number;
    author: User;
    created_at: string;
    author_id: number;
};
const Comments = ({
    comments,
    auth,
}: {
    comments: Comment[];
    auth: {
        user: User;
    };
}) => {
    const [isEditing, setIsEditing] = useState(false);
    const { delete: destroy, processing } = useForm({
        content: "",
    });
    const [commentId, setCommentId] = useState<number | null>(null);

    const handleEditComment = (id: number) => {
        if (isEditing === true) {
            setCommentId(null);
            setIsEditing(false);
        } else {
            setCommentId(id);
            setIsEditing(true);
        }
    };

    const handleDeleteComment = (id: number) => {
        destroy(route("evacuator.comment.delete", id));
        toast.success("კომენტარი წარმატებით წაიშალა");
    };
    return (
        <>
            <h4 className="text-xl font-semibold mb-4">კომენტარები</h4>
            <div className="space-y-4">
                {comments?.map((comment: Comment) => (
                    <div
                        key={comment?.id}
                        className="bg-gray-100 p-4 rounded-lg"
                    >
                        <div className="text-sm w-full text-gray-700 flex justify-between items-center">
                            <div className="flex justify-start items-center gap-1">
                                <strong>{comment?.author?.name}</strong> -{" "}
                                {new Date(
                                    comment?.created_at
                                ).toLocaleDateString()}
                            </div>
                            {comment?.author_id === auth?.user?.id && (
                                <div className="flex items-center justify-end gap-2 text-lg">
                                    <button
                                        onClick={() =>
                                            handleEditComment(comment?.id)
                                        }
                                        className="border-[1px] p-1 rounded-full text-light hover:text-slate-100  hover:bg-teal duration-200 transition-all"
                                    >
                                        {isEditing &&
                                        comment.id === commentId ? (
                                            <HiOutlineArrowLeft className="cursor-pointer" />
                                        ) : (
                                            <HiOutlinePencil className="cursor-pointer" />
                                        )}
                                    </button>
                                    <button
                                        className="border-[1px] p-1 rounded-full text-red-400 hover:text-slate-100 hover:bg-red-500 duration-200 transition-all "
                                        onClick={() =>
                                            handleDeleteComment(comment.id)
                                        }
                                    >
                                        <HiOutlineTrash className="cursor-pointer" />
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditing &&
                        comment?.author_id === auth.user.id &&
                        comment.id === commentId ? (
                            <EditComment comment={comment} />
                        ) : (
                            <p className="mt-2">{comment?.content}</p>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Comments;
