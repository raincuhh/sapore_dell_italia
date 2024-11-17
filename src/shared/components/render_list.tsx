type RenderListProps<T> = {
   data: T[];
   render_item: (item: T, i?: number) => React.ReactNode;
};

export default function RenderList<T>({
   data,
   render_item,
}: RenderListProps<T>) {
   return <>{data.map((item: T, i: number) => render_item(item, i))}</>;
}
