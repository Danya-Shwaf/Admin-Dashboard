

export const getDesign = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          
        }
      : {
          
        }),
  },
});
