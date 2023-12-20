import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";
import { CiCalendarDate } from "react-icons/ci";
import "dayjs/locale/es"
import "./App.css"

dayjs.locale("es");

function App() {
  const localizer = dayjsLocalizer(dayjs);

  const events = [
    {
      start: dayjs("2023-12-18T12:00:00").toDate(),
      end: dayjs("2023-12-18T13:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 10,
      },
    },
    {
      start: dayjs("2023-12-23T12:00:00").toDate(),
      end: dayjs("2023-12-24T12:00:00").toDate(),
      title: "Evento 1",
      data: {
        x: 20,
      },
    },
  ];

  const components = {
    event: (props) => {
      const { data } = props.event;
      console.log(data);

      if (data.x > 15) {
        return (
          <div style={{ background: "red" }}>
            <CiCalendarDate />
            {props.title}
          </div>
        );
      } else {
        return (
          <div style={{ background: "green" }}>
            <CiCalendarDate />
            {props.title}
          </div>
        );
      }
    },
  };

  return (
    <div
      style={{
        height: "95vh",
        width: "70vw",
      }}
    >
      <Calendar
        localizer={localizer}
        events={events}
        views={["month", "week", "day"]}
        // view={"month"}
        date={dayjs("2023-12-19T12:00:00").toDate()}
        toolbar={true}
        defaultView="month"
        min={dayjs("2023-12-23T08:00:00").toDate()}
        max={dayjs("2023-12-23T18:00:00").toDate()}
        formats={{
          dayHeaderFormat: (date) => {
            console.log(date);
            return dayjs(date).format("DD/MM/YYYY");
          },
        }}
        components={components}
      />
    </div>
  );
}

export default App;
