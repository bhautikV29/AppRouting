export default function Home({params}) {
  console.log('params',params )
    return (
      <div>
        auth {params && params?.id}
      </div>
    );
  }
  