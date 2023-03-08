import {WithReferringDocuments} from 'sanity'
import {IntentButton, Preview, useSchema} from 'sanity'

const ReferencedBy = (props) => {
  const schema = useSchema()

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      {/* eslint-disable-next-line react/prop-types */}
      <WithReferringDocuments id={props.documentId}>
        {({referringDocuments, isLoading}) => {
          if (isLoading) {
            return <div>Looking for referring documents...</div>
          }

          if (!referringDocuments.length) return null

          return (
            <div>
              {referringDocuments?.map((document) => {
                const schemaType = schema.get(document._type)

                return (
                  <div key={document._id}>
                    {schemaType ? (
                      <IntentButton intent="edit" params={{id: document._id, type: document._type}}>
                        <Preview value={document} type={schemaType} />
                      </IntentButton>
                    ) : (
                      <div>
                        A document of the unknown type <em>{document._type}</em>
                      </div>
                    )}
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
