type CarParams = {
    carId: string;
};

export default function page({ params }: { params: CarParams }) {
    return <div>Car #{params.carId}</div>;
}
