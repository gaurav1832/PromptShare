import Card from "./Card";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1>
        {" "}
        <span className="gptgreen">{name} Profile </span>
      </h1>

      <p className="desc text-left">{desc}</p>

      <h1 className="gptgreen mt-10 text-center font-satoshi text-2xl">
        {name} Posts ...
      </h1>

      <div className="mt-8 prompt_layout">
        {data.map((post) => (
          <Card
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
