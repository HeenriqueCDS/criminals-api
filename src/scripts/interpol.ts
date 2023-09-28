import axios from "axios";

type Link = { href?: string };

interface Notice {
  date_of_birth: string;
  nationalities: string[];
  entity_id: string;
  name: string;
  forename: string;
  _links: {
    self: Link;
    images: Link;
    thumbnail: Link;
  };
}

interface InterpolResponse {
  total: number;
  query: {
    resultPerPage: number;
    page: number;
  };
  _embedded: {
    notices: Notice[];
  };
}

const fetchInterpolData = async (): Promise<Notice[]> => {
  try {
    const response = await axios.get(
      "https://ws-public.interpol.int/notices/v1/red",
      {
        params: {
          resultPerPage: 200,
          page: 1,
        },
      }
    );
    const data = response.data as InterpolResponse;
    return data._embedded.notices;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export { fetchInterpolData };
