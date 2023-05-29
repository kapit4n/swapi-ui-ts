interface ListItemData {
  titleField: string;
  descriptionFields: string[];
  dataSource: any;
  imagePlaceholder: string;
  objectType: string;
  mainRoute: string;
}

interface ListItemProps {
  data: ListItemData;
  route: string;
  onClickSetCurrent: (data: string) => void
}
