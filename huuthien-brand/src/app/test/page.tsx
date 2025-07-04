export default async function TestPage() {
  // Fetch API thật
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const data = await res.json();
  // Delay 3s để loading rõ ràng
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return (
    <div style={{color: 'white', fontSize: 32, textAlign: 'center'}}>
      <div>Trang Test Loading</div>
      <div style={{marginTop: 24, fontSize: 20, color: '#38bdf8'}}>
        {data.title}
      </div>
    </div>
  );
} 