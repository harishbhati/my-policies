const formatDate = (dateStr: string): string => {
    const [year, month, day] = dateStr.split("-");
    const date = new Date(Number(year), Number(month) - 1, Number(day));
    return date.toLocaleDateString("en-AU", { day: "2-digit", month: "short", year: "numeric" });
};

export default formatDate;
