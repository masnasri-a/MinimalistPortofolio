import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { IoCalendarNumber } from "react-icons/io5";
import { FaCalendarDay } from "react-icons/fa";
import axios from "axios";

const CreateNote = (props:any) => {
  const [TaskName, setTaskName] = useState("");
  const [content, setContent] = useState("");
  const [titleError, settitleError] = useState(false);
  let contents = "";
  useEffect(() => {}, []);
  const QuillNoSSRWrapper = dynamic(import("react-quill"), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
  });

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
  ];

  const handleContent = (value: string) => {
    contents = value;
  };

  const handlePost = async() => {
    const mapper_data = {
      title: TaskName,
      content: contents,
      created_by: "masnasri",
      created_at: Date.now(),
      type: "notes",
      label: "Other",
      pinned: false,
    };
    await axios.post("https://j9b225.deta.dev/content",mapper_data).then((resp)=>{
      console.log(resp);
      props.save("success")
    })
  };

  return (
    <div className="allPage">
      <div className="inputNote">
        <div className="nameTaskInput">
          <input
            type="text"
            className="inputTitle"
            value={TaskName}
            placeholder="Task"
            onChange={(e) => setTaskName(e.target.value)}
          />
          {titleError ? <>Title is required</> : null}
        </div>
        <div className="bodyTask">
          <QuillNoSSRWrapper
            modules={modules}
            formats={formats}
            theme="snow"
            onChange={handleContent}
          />
        </div>
        <div className="footerAdd">
          <div className="selectorNote">
            <FaCalendarDay size={20} color="#555555" />
            <select name="label" id="label">
              <option value="ebdesk">EBDESK</option>
              <option value="ggwp">GGWP.ID</option>
              <option value="idntimes">IDNTimes</option>
              <option value="freelance">Freelance</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button onClick={(e) => handlePost()}>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
