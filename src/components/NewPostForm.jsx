function NewPostForm() {
    return (
        <div className="my-4">
            <textarea placeholder="What's on your mind?" className="p-2 w-full border rounded"></textarea>
            <button className="transition ease-in-out mt-2 px-4 py-2 bg-comment w-full border-solid border hover:bg-accent text-white rounded">Post</button>
        </div>
    );
}

export default NewPostForm