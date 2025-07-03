// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function TestPage({ params }: any) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div style={{color: 'white', fontSize: 32, textAlign: 'center'}}>
      <div>Trang Test Loading Động</div>
      <div style={{marginTop: 24, fontSize: 20, color: '#38bdf8'}}>
        {data.title}
      </div>
    </div>
  );
} 