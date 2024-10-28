import {
    HiOutlineArrowLeft,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";
import Button from "./Button";
import { Comment, User } from "@/types";
import { useForm } from "@inertiajs/react";
import EditComment from "./EditComment";

type CommentType = {
    content: string;
    id: number;
    author: User;
    created_at: string;
    author_id: number;
};
const Comments = ({
    comments,
    isEditing,
    auth,
    handleEditComment,
}: {
    comments: Comment[];
    isEditing: boolean;
    handleEditComment: () => void;
    auth: {
        user: User;
    };
}) => {
    const { delete: destroy, processing } = useForm({
        content: "",
    });

    const handleDeleteComment = () => {};
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
                            {comment?.author_id === auth?.user.id && (
                                <div className="flex items-center justify-end gap-2 text-lg">
                                    <button
                                        onClick={handleEditComment}
                                        className="border-[1px] p-1 rounded-full text-light hover:text-slate-100  hover:bg-teal duration-200 transition-all"
                                    >
                                        {isEditing ? (
                                            <HiOutlineArrowLeft className="cursor-pointer" />
                                        ) : (
                                            <HiOutlinePencil className="cursor-pointer" />
                                        )}
                                    </button>
                                    <button
                                        className="border-[1px] p-1 rounded-full text-red-400 hover:text-slate-100 hover:bg-red-500 duration-200 transition-all "
                                        onClick={handleDeleteComment}
                                    >
                                        <HiOutlineTrash className="cursor-pointer" />
                                    </button>
                                </div>
                            )}
                        </div>
                        {isEditing && comment?.author_id === auth.user.id ? (
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
