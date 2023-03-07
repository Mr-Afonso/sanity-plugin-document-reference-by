import {WithReferringDocuments} from 'sanity'
import {IntentButton} from 'sanity'

const ReferencedBy = (props) => {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <WithReferringDocuments id={props.documentId}>
        {({referringDocuments, isLoading}) => {
          // Optional: Read options from the schema to filter by a specific type
          // const documents = referringDocuments.filter(
          //   (doc) => doc.type === referenceType
          // );

          if (isLoading) {
            return <div>Looking for referring documents...</div>
          }

          if (!referringDocuments.length) return null

          return (
            <div>
              {referringDocuments?.map((document) => {
                return (
                  <div key={document._id}>
                    <IntentButton
                      style={{
                        margin: '4px 2px',
                      }}
                      intent="edit"
                      params={{id: document._id, type: document._type}}
                    >
                      <div>
                        <b>Document Type: </b>
                        {document._type}
                      </div>
                      <div>
                        <b>Document Id: </b>
                        {document._id}
                      </div>
                    </IntentButton>
                  </div>
                )
              })}
            </div>
          )
        }}
      </WithReferringDocuments>
    </div>
  )
}

export default ReferencedBy
