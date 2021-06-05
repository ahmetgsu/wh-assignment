export const timeConverter = (time: number) =>
  `${new Date(time * 1000).toISOString().substr(14, 5)} min.`;
