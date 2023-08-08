import csr from "@/data/csr.json";

async function getData(props: { spc_id: string }) {
  const { spc_id } = props;
  const data = await csr.filter((i) => i.spc_id === spc_id)[0];

  return data;
}

export default async function Page({ params }: { params: { spc_id: string } }) {
  const { spc_id } = params;
  const data = await getData({ spc_id });
  return (
    <div>
      <h1>{data?.spc_title}</h1>
    </div>
  );
}

export async function generateStaticParams() {
  return csr;
}
