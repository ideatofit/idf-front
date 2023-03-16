export default function formatDate(dateString: string) {
    const date = new Date(dateString);
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const formattedDate = `${
      monthNames[date.getMonth()]
    } ${date.getDate()} , ${date.getFullYear()}`;
    return formattedDate;
  }
  