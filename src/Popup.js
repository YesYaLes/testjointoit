import React, { useEffect, useState } from "react";
import "./Popup.css";
const Popup = ({
  visible,
  setVisibility,
  timeData,
  eventPresetData,
  setEvent,
  setPresetedEventData,
}) => {
  const [eventData, setEventData] = useState({
    title: "",
    start: "",
    end: "",
    id: Math.random(),
    notes: "",
  });

  useEffect(() => {
    setEventData((prev) => ({
      ...prev,
      start: timeData.start,
      end: timeData.end,
    }));
  }, [timeData]);

  const addEvent = () => {
    setEvent(eventData);
    setEventData({
      title: "",
      start: "",
      end: "",
      id: Math.random(),
      notes: "",
    });
    setVisibility(false);
    // setEventData({ title: "", start: "", end: "", id: 3, notes: "" });
  };
  return (
    visible && (
      <div className="Popup">
        <button
          className="CloseBtn"
          onClick={() => {
            setVisibility(false);
            setPresetedEventData({
              title: "",
              start: "",
              end: "",
              id: 3,
              notes: "",
            });
            // setEventData({
            //   title: "",
            //   start: "",
            //   end: "",
            //   id: Math.random(),
            //   notes: "",
            // });
          }}
        >
          X
        </button>
        <div className="InputBlock">
          <label className="InputBlockName">event name</label>
          <input
            className="InputBlockPole"
            onChange={(e) => {
              setEventData({ ...eventData, title: e.target.value });
            }}
            value={
              eventPresetData.title === ""
                ? eventData.title
                : eventPresetData.title
            }
          ></input>
          <div className="UnderLine" />
        </div>
        <div className="InputBlock">
          <img alt="IMG" src="/Bell.png" className="InputImg" />
          <label className="InputBlockName">event date</label>
          <input
            className="InputBlockPole"
            placeholder={
              eventPresetData.start === ""
                ? timeData.start
                : eventPresetData.start
            }
          ></input>
          <div className="UnderLine" />
        </div>
        <div className="InputBlock">
          <img alt="IMG" src="/Bell.png" className="InputImg" />
          <label className="InputBlockName">event time</label>
          <input className="InputBlockPole"></input>
          <div className="UnderLine" />
        </div>
        <div className="InputBlock">
          <label className="InputBlockName">notes</label>
          <input
            className="InputBlockPole"
            onChange={(e) => {
              setEventData({ ...eventData, notes: e.target.value });
            }}
            value={eventData.notes}
          ></input>
          <div className="UnderLine" />
        </div>
        <div className="BtnsBlock">
          <div
            className="SingleBtn"
            style={{ color: "#FF5F5F", fontSize: 12 }}
            onClick={() => {
              setVisibility(false);
            }}
          >
            {eventPresetData.title === "" ? "Cancel" : "Discard"}
          </div>
          <div
            className="SingleBtn"
            style={{ color: "#6A6996", fontSize: 12 }}
            onClick={() => {
              eventData.title.length > 0
                ? eventData.title.length > 30
                  ? alert("error,too long to add")
                  : addEvent()
                : alert("set a Name firstly");
            }}
          >
            {eventPresetData.title === "" ? "Save" : "Edit"}
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
