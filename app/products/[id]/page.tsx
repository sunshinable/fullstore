export default function Products({params}: {params: { id: string}}) {
    return (
        <div>
            <h1>Products {params.id}</h1>
        </div>
    )
}