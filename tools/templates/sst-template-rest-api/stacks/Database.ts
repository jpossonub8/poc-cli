import { StackContext, Table } from 'sst/constructs';

export function Database({ stack }: StackContext) {
  const mainTable = new Table(stack, 'MainTable', {
    fields: {
      pk: 'string',
      sk: 'string',
      // Global secondary indexes
      gsi1pk: 'string',
      gsi1sk: 'string',
      gsi2pk: 'string',
      gsi2sk: 'string',
      gsi3pk: 'string',
      gsi3sk: 'string',
      gsi4pk: 'string',
      gsi4sk: 'string',
      // Collections secondary indexes
      gsic1pk: 'string',
      gsic1sk: 'string',
      gsic2pk: 'string',
      gsic2sk: 'string',
      gsic3pk: 'string',
      gsic3sk: 'string',
      gsic4pk: 'string',
      gsic4sk: 'string',
    },
    primaryIndex: {
      partitionKey: 'pk',
      sortKey: 'sk',
    },
    globalIndexes: {
      // Global secondary indexes
      gsi1: { partitionKey: 'gsi1pk', sortKey: 'gsi1sk', },
      gsi2: { partitionKey: 'gsi2pk', sortKey: 'gsi2sk', },
      gsi3: { partitionKey: 'gsi3pk', sortKey: 'gsi3sk', },
      gsi4: { partitionKey: 'gsi4pk', sortKey: 'gsi4sk', },
      // Collections secondary indexes
      gsic1: { partitionKey: 'gsic1pk', sortKey: 'gsic1sk', },
      gsic2: { partitionKey: 'gsic2pk', sortKey: 'gsic2sk', },
      gsic3: { partitionKey: 'gsic3pk', sortKey: 'gsic3sk', },
      gsic4: { partitionKey: 'gsic4pk', sortKey: 'gsic4sk', },
    },
  });

  return { mainTable };
}
