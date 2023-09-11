export interface DListResponse<Data = any> {
  code: number;
  message: string;
  response?: {
    data?: Data;
    totalRecord?: number;
  };
  [key: string]: any;
}

export interface DObjectResponse<Data = any> {
  code: number;
  message: string;
  response?: Data;
  [key: string]: any;
}
export interface DList<Data = any> {
  data?: Data[];
  totalRecord?: number;
}
export interface DObject<Data = any> {
  data?: Data;
  totalRecord?: number;
}

export interface OptionProps {
  value: string | number;
  id?: string | number;
  avatar?: string;
  color?: string;
  icon?: string | React.FC<React.SVGProps<SVGSVGElement>>;
  [key: string]: any;
}

// Trigger types
export interface TriggerTypes {
  id: string;
  targetId?: number;
  actionName?: string;
  [key: string]: any;
}

export type ObjectOfString<T = string> = {
  [key: string]: T;
};

export type FileAttachmentModel = {
  createdBy: number;
  createdByAvatar: string;
  createdById: number;
  createdByName: string;
  createdDate: string;
  dataType: string;
  description: string;
  displayFileName: string;
  fileExtension: string;
  fileName: string;
  fileSize: number;
  id: number;
  isDeleted: boolean;
  name: string;
  note: string;
  outTotalJson: string;
  recordId: number;
  totalRecord: number;
  updatedBy: number;
  updatedDate: string;
};
