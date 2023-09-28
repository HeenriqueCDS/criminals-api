import { Criminal } from "../types/criminal.type";
import { fetchFBIData } from "./fbi";
import { fetchInterpolData } from "./interpol";
import { database } from "../database/db";

const main = async () => {
  try {
    const fbiCriminals = await fetchFBIData();
    const interpolCriminals = await fetchInterpolData();

    const criminals: Criminal[] = fbiCriminals
      .map((criminal) => {
        const formattedCriminal: Criminal = {
          identifier: criminal.uid,
          name: criminal.title,
          image:
            criminal.images.thumb ||
            criminal.images.original ||
            criminal.images.large,
          agency: "FBI",
        };
        return formattedCriminal;
      })
      .concat(
        interpolCriminals.map((criminal) => {
          const formattedCriminal: Criminal = {
            identifier: criminal.entity_id,
            name: criminal.name,
            forename: criminal.forename,
            birthdate: criminal.date_of_birth,
            agency: "Interpol",
            image:
              criminal._links.thumbnail?.href ||
              criminal._links.images?.href ||
              undefined,
          };
          return formattedCriminal;
        })
      );

    criminals.forEach(async (criminal) => {
      await database.criminal.create({
        data: criminal,
      });
    });
    console.log("Criminals fetched and saved to database");
  } catch (err) {
    console.error(err);
  }
};

main();
