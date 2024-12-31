import { ProgressSpinner } from 'primereact/progressspinner';

export default function Loading() {
    return (
    <div id='gradient' className="h-screen w-screen flex justify-center items-center">
        <ProgressSpinner />
    </div>
    );
}