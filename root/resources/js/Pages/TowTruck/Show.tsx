import Button from "@/Components/Button";
import Comments from "@/Components/Comments";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PageProps } from "@/types";
import { Head, Link, useForm } from "@inertiajs/react";
import {
    Key,
    ReactElement,
    JSXElementConstructor,
    ReactNode,
    ReactPortal,
    FormEvent,
    useState,
} from "react";
import {
    HiOutlineArrowLeft,
    HiOutlinePencil,
    HiOutlineTrash,
} from "react-icons/hi2";

interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string | null;
    role: string;
    status: string;
}

const Show = ({ auth, evacuator, evacuator_owner, comments }: PageProps) => {
    const { data, setData, post, put, reset, errors, processing } = useForm({
        content: "",
    });
    const [isEditing, setIsEditing] = useState(false);

    const submitComment = (e: FormEvent) => {
        e.preventDefault();
        post(route("evacuator.comment", evacuator?.id));
    };

    const handleDeleteComment = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        console.log("delete");
    };

    const handleEditComment = () => {
        setIsEditing((isEditing) => !isEditing);
    };

    const handleUpdateComment = (id: number) => {
        console.log("update");
        put(route("evacuator.comment.update", id));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-teal">
                    {evacuator?.driver_name} - დეტალური ინფორმაცია
                </h2>
            }
        >
            <Head title={evacuator?.driver_name} />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 bg-white shadow rounded-lg p-6">
                    {/* უკან დაბრუნების ღილაკი */}
                    <div className="w-full flex justify-start items-center py-2">
                        <Link
                            className="inline-flex items-center rounded-md border border-transparent bg-steal px-4 py-2 text-xs font-semibold uppercase tracking-widest bg-light text-white transition duration-150 ease-in-out hover:bg-teal focus:bg-teal focus:outline-none focus:ring-2 focus:ring-light focus:ring-offset-2 active:bg-teal"
                            href={route("evacuator.index")}
                        >
                            უკან დაბრუნება
                        </Link>
                    </div>

                    {/* ევაკუატორის ინფორმაცია */}
                    <img
                        src={evacuator?.image}
                        alt={evacuator?.driver_name}
                        className="w-full h-64 object-cover rounded-lg mb-6"
                    />
                    <h3 className="text-2xl font-bold mb-2">
                        {evacuator?.driver_name}
                    </h3>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">მანქანის ნომერი: </span>
                        {evacuator?.truck_number}
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">მდებარეობა: </span>
                        {evacuator?.location}
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">სტატუსი: </span>
                        <span
                            className={
                                evacuator?.availability_status ===
                                "ხელმისაწვდომი"
                                    ? "text-green-600"
                                    : "text-red-600"
                            }
                        >
                            {evacuator?.availability_status}
                        </span>
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">მძღოლის ტელეფონი:</span>
                        {evacuator?.driver_phone}
                    </div>
                    <hr className="my-6" />

                    {/* მფლობელის ინფორმაცია */}
                    <h4 className="text-xl font-semibold mb-2">
                        მფლობელის ინფორმაცია
                    </h4>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">სახელი: </span>
                        {evacuator_owner?.name}
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">ელ.ფოსტა: </span>
                        {evacuator_owner?.email}
                    </div>
                    <div className="text-lg mb-4">
                        <span className="font-semibold">ტელეფონი: </span>
                        {evacuator_owner?.phone_number ?? "არ არის მითითებული"}
                    </div>

                    <hr className="my-6" />

                    <form onSubmit={submitComment} className="mb-6">
                        <label className="block text-lg font-semibold mb-2">
                            კომენტარი
                        </label>
                        <textarea
                            className="w-full border-gray-300 rounded-md shadow-sm"
                            value={data.content}
                            onChange={(e) => setData("content", e.target.value)}
                            rows={4}
                            placeholder="კომენტარის დაწერა..."
                        ></textarea>
                        {errors.content && (
                            <div className="text-red-600 mt-2">
                                {errors.content}
                            </div>
                        )}
                        <Button
                            type="button"
                            onClick={() => {
                                reset("content");
                            }}
                            className="mt-4 px-4 py-2 bg-teal-600 text-white rounded-lg bg-red-400 duration-150 transition-all hover:bg-red-500"
                        >
                            გასუფთავება
                        </Button>
                        <Button
                            type="submit"
                            disabled={processing}
                            className="mt-4 ml-1 px-4 py-2 bg-teal-600 text-white rounded-lg bg-light duration-150 transition-all hover:bg-teal"
                        >
                            {processing ? "დაელოდეთ..." : "დამატება"}
                        </Button>
                    </form>

                    <Comments
                        comments={comments?.data}
                        isEditing={isEditing}
                        handleEditComment={handleEditComment}
                        auth={auth}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Show;
