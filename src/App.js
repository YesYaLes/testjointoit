import { Calendar, momentLocalizer } from "react-big-calendar";
import { useState, useCallback, useEffect } from "react";
import moment from "moment";
import "./App.css";
import "./Calendar.css";
import PageLayout from "./PageLayout";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import Popup from "./Popup";
const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar);

function App() {
  const [popupVisibility, setPopupVisibility] = useState(false);
  const [timeData, setTimeData] = useState({ start: "", end: "" });
  const [editEventData, setEditEventData] = useState({
    start: "",
    end: "",
    title: "",
    notes: "",
    id: 3,
  });

  const [events, setEvents] = useState([
    {
      start: moment("2024-08-27T10:00:00").toDate(),
      end: moment("2024-08-27T11:00:00").toDate(),
      title: "Some Event 1",
      notes: "",
      id: 1,
    },
    {
      start: moment("2024-08-27T14:00:00").toDate(),
      end: moment("2024-08-27T16:00:00").toDate(),
      title: "Some Event 2",
      notes: "",
      id: 2,
    },
  ]);

  const setPresetedData = (data) => {
    setEditEventData(data);
  };
  const moveEvent = useCallback(
    ({ event, start, end, isAllDay: droppedOnAllDaySlot = false }) => {
      const { allDay } = event;
      if (!allDay && droppedOnAllDaySlot) {
        event.allDay = true;
      }
      if (allDay && !droppedOnAllDaySlot) {
        event.allDay = false;
      }

      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end, allDay: event.allDay }];
      });
    },
    [setEvents]
  );

  const resizeEvent = useCallback(
    ({ event, start, end }) => {
      setEvents((prev) => {
        const existing = prev.find((ev) => ev.id === event.id) ?? {};
        const filtered = prev.filter((ev) => ev.id !== event.id);
        return [...filtered, { ...existing, start, end }];
      });
    },
    [setEvents]
  );

  const handleSelectSlot = ({ start, end }) => {
    setPopupVisibility(true);
    setTimeData({ start: start, end: end });
  };

  const setEventsData = (data) => {
    setEvents([...events, data]);
  };
  const handleSelectEvent = (event) => {
    setPopupVisibility(true);
    setEditEventData(event);
  };
  return (
    <div className="App">
      <PageLayout>
        <label className="PageName">Calendar</label>
        <DragAndDropCalendar
          localizer={localizer}
          events={events}
          onEventDrop={moveEvent}
          onEventResize={resizeEvent}
          onSelectEvent={handleSelectEvent}
          onSelectSlot={handleSelectSlot}
          popup
          resizable
          selectable
          className="Calendar"
        />
        <Popup
          eventPresetData={editEventData}
          setPresetedEventData={setPresetedData}
          visible={popupVisibility}
          setVisibility={setPopupVisibility}
          timeData={timeData}
          setEvent={setEventsData}
          events={events}
        />
      </PageLayout>
    </div>
  );
}

export default App;
