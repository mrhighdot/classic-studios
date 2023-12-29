export const getSurgePosts = async () => {
  try {
    const generalURL = "http://smghwebsite.local/wp-json";
    const res = await fetch(generalURL);
    if (res.ok) {
      // console.log(res.)
      const data = res.json();
      console.log(data);
    } else {
      console.log(res.error);
    }
  } catch (error) {
    console.log(error);
  }
};
