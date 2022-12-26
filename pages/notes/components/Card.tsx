import axios from "axios";
import { title } from "process";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";

const Card = (props: any) => {
  const [detail, setDetail] = useState(false);
  const [alert, setAlert] = useState(false);

  let dates = new Date(props.createdAt);

  const handleDelete = async () => {
    await axios
      .delete("https://j9b225.deta.dev/content?_id=" + props.idNote)
      .then((resp) => {
        window.location.reload();
      });
  };
  return (
    <>
      {detail ? (
        <div className="detailNotes" onClick={(e) => setDetail(!detail)}>
          <div
            className="cardDetailNote"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="titleDetailNotes">{props.title.toUpperCase()}</div>
            <div className="contentDetailNote">
              <div dangerouslySetInnerHTML={{ __html: props.body }} />
            </div>
            {alert ? (
              <div className="btnDelete">
                <button
                  className="btn btn-secondary"
                  onClick={() => setAlert(!alert)}
                >
                  Discard
                </button>
                <button
                  className="btn btn-primary"
                  onClick={() => handleDelete()}
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="btnDelete" onClick={() => setAlert(!alert)}>
                <button className="btn btn-secondary ">
                  <FiTrash2 />
                </button>
              </div>
            )}
          </div>
        </div>
      ) : null}
      {props.title ? (
        <div className="cardNote" onClick={(e) => setDetail(!detail)}>
          <div className="titleNotes">
            <p>{props.title.toUpperCase()}</p>
          </div>
          <div className="footerNotes">
            <div className="createdAtNote">{dates.toLocaleString()}</div>
            {props.label ? (
              <div className="labelNotes">{props.label}</div>
            ) : (
              <div className="labelNotes">Unlabeled</div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Card;
