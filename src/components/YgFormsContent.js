import React, {Component} from 'react'
import allForms from './all-forms'

function FormLinks ({formDetails}) {
  window.FormLinksformDetails = formDetails
  if(formDetails.url_english == formDetails.url_french) {
    // bilingual version!
    return (
      <div>
        <img src="http://www.gov.yk.ca/forms/images/arrow_r_2.gif"></img>&nbsp;&nbsp;
        <a href={formDetails.url_english} target="blank">Bilingual</a>
        <img src="http://www.gov.yk.ca/forms/images/filetype_pdf.jpg" alt="PDF"></img>
        ({formDetails.id.toUpperCase()})
      </div>
    )
  } else {
    return (
      <div>
        <img src="http://www.gov.yk.ca/forms/images/arrow_r_2.gif"></img>&nbsp;&nbsp;
        <a href={formDetails.url_english} target="blank">English</a>
        <a href={formDetails.url_french} target="blank">French</a>
        <img src="http://www.gov.yk.ca/forms/images/filetype_pdf.jpg" alt="PDF"></img>
        ({formDetails.id.toUpperCase()})
      </div>
    )
  }
}

function Form ({formDetails}) {
  return (
    <p>
      {formDetails.label}<br/>

      <i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <FormLinks formDetails={formDetails} />
      </i>
    </p>
  )
}

function FormSection(sectionName, contents) {
  window.FormSectionArguments = arguments
  window.FormSectionContents = contents
  return (
    [
      <h3><a name="">&nbsp;</a><strong>{sectionName}</strong></h3>
    ].concat(
      contents.map((c) => Form({formDetails: c}))
    )
  )
}

function FormLetteredSection(letter, contents) {
  window.FormLetteredSectionContents = contents

  const componentContents = Object.keys(contents).map( (sectionName) => FormSection(sectionName, contents[sectionName]) )

  return (
    <div>
      <h2>{letter}</h2>
      <table border="1" cellpadding="3" cellspacing="0" width="100%" border-color="#cccccc">
        <tr>
          <td valign="top">
            { componentContents }
          </td>
        </tr>
      </table>
    </div>
  )
}

class YgFormsContent extends Component {
  render() {
    window.allForms = allForms
    return Object.keys(allForms).map((letter) => FormLetteredSection(letter, allForms[letter]))
    // return Form(allForms['A']['Access to Information and Protection of Privacy'][0])
  }
}

export default YgFormsContent
