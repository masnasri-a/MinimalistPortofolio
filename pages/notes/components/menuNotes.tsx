import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const MenuNotes = (props: any) => {
  const [content, setContent] = useState<any>([{}]);

  const handleFetch = async () => {
    await axios.get("https://j9b225.deta.dev/list_content").then((resp) => {
      setContent(resp.data);
    });
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <div className="menuNotes">
      <span>
        {props.menuName}
        <div className="bodyNotes">
          <div className="row">
            {content.map((detail: any, index:number) => {
              return (
                <div className="col-4" key={index}>
                  <Card idNote={detail._id} title={detail.title} label={detail.label} body={detail.content} createdAt={detail.created_at} />
                </div>
              );
            })}
          </div>
        </div>
      </span>
    </div>
  );
};

export default MenuNotes;
