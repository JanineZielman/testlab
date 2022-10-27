import Head from "next/head";
import { SliceZone } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

import { createClient } from "../../prismicio";
import { components } from "../../slices/";
import { Layout } from "../../components/Layout";

const Works = ({ page, navigation, settings, works }) => {
	console.log(works)
  return (
    <Layout navigation={navigation} settings={settings}>
      <Head>
        <title>{prismicH.asText(page.data.title)}</title>
      </Head>
			<div className="works-grid">
				{works.map((item, i) => {
					return(
						<div className="work">
							<img src={item.data.cover_image.url}/>
							<p>{item.data.name}</p>
						</div>
					)
				})}
			</div>
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export default Works;

export async function getStaticProps({ locale, previewData }) {
  const client = createClient({ previewData });

  const page = await client.getSingle("works", { lang: locale });
  const navigation = await client.getSingle("navigation", { lang: locale });
  const settings = await client.getSingle("settings", { lang: locale });

	const works = await client.getAllByType("work", { 
		orderings: [
      { field: "my.work.name", direction: "desc" },
    ],
	});

  return {
    props: {
      page,
      navigation,
      settings,
			works,
    },
  };
}
