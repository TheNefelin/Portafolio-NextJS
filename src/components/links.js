
const fetching = async () => {
  const res = await fetch("https://bsite.net/metalflap/links", { cache: 'no-store' });

  if (!res.ok) {
    return [];
  }

  return await res.json();
}

const prueba = await fetching();
console.log(prueba)

export default function Links() {
  return (
    <div>links</div>
  )
}
