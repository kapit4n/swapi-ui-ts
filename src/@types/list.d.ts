interface ListItemData {
  titleField?: string;
  descriptionFields?: string[];
  dataSource: any;
  objectType: string;
  mainRoute: string;
}

interface ListItemProps {
  data: ListItemData;
  onClickSetCurrent: (id: string, objectType: string) => void
}
