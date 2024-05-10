const token = process.env.API_TOKEN;

export const config = {
  headers: {
    Authorization: token,
  },
};
