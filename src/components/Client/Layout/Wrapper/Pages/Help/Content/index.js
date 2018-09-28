import React from 'react';
import ListFile from './ListFile';
import howDoIStartANewQuote from './../../../../../../../assets/videos/1-3-how-do-i-start-a-new-quote.swf';
import howDoIWriteTheQuote from './../../../../../../../assets/videos/3-3-how-do-i-write-the-quote.swf';
import howDoIPrintAQuote from './../../../../../../../assets/videos/4-1-How-do-i-print-a-quote.swf';
import howDoIEmailAQuote from './../../../../../../../assets/videos/5-1-How-do-i-email-a-quote.swf';
import howDoIOrderParts from './../../../../../../../assets/videos/6-1-How-do-i-order-parts.swf';
import caumFile from './../../../../../../../assets/documents/Crashzone-Audanet-user-manual.pdf';
import ceumFile from './../../../../../../../assets/documents/Crashzone-EMTA-user-manual.pdf';
import caumv2File from './../../../../../../../assets/documents/Crashzone-ARNIE-user-manual-V2.pdf';
import cnmFile from './../../../../../../../assets/documents/Crashzone-NTAR-manual.pdf';
import cumfoFile from './../../../../../../../assets/documents/CRASHZONE-USER-MANUAL-FOR-ORM-25062009.pdf';
import pumFile from './../../../../../../../assets/documents/PNET4-user-manual.pdf';
import ceum2010File from './../../../../../../../assets/documents/crashzone-estimage-user-manual-20100719.pdf';
import cxumFile from './../../../../../../../assets/documents/CZXeroUserManual.pdf';
import cmeumFile from './../../../../../../../assets/documents/Crashzone_MYOB_export_user_manual.pdf';
import cqrFile from './../../../../../../../assets/documents/Crashzone-Quick-Reference-2008.pdf';
import sabumFile from './../../../../../../../assets/documents/Supplier-Address-Book-User-Manual.pdf';
import pcmFile from './../../../../../../../assets/documents/Partscheckmanual.pdf';
import ciaumFile from './../../../../../../../assets/documents/Crashzone_iPhone_app_user_manual.pdf';
import cpoumFile from './../../../../../../../assets/documents/Crashzone-Parts-Ordering-User-Manual.pdf';
import ctaqrgFile from './../../../../../../../assets/documents/CrashzoneTimeApp-QuickReferenceGuide.pdf';
import chtupFile from './../../../../../../../assets/documents/CRASHZONE-HOW-TO-UPLOAD-PHOTO.pdf';
import CrashzoneDebuger from './../../../../../../../assets/softdebugger/CrashzoneDebuger.exe';
import ListVideo from './ListVideo';
const index = () => {
  return (
    <div className="container my-5">
      <div className="d-flex flex-column flex-lg-row">
        <div className="col-12 col-lg-7 ">
          <div className="bg-light px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Help</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  File
                </li>
              </ol>
            </nav>
            <ul className="list-unstyled ml-3">
              <ListFile link={cqrFile}>Crashzone Quick Reference</ListFile>
              <ListFile link={ciaumFile}>
                Crashzone iPhone App user manual
              </ListFile>
              <ListFile link={ceum2010File}>
                Crashzone Estimage user manual
              </ListFile>
              <ListFile link={ctaqrgFile}>
                Crashzone – Time App user manual
              </ListFile>
              <ListFile link={chtupFile}>
                Crashzone – Upload Photo user manual
              </ListFile>
              <ListFile link={pcmFile}>
                Crashzone PartsCheck user manual
              </ListFile>
              <ListFile link={cpoumFile}>
                Crashzone Parts Ordering user manual
              </ListFile>
              <ListFile link={caumFile}>Crashzone Audanet user manual</ListFile>
              <ListFile link={ceumFile}>Crashzone EMTA user manual</ListFile>
              <ListFile link={caumv2File}>Crashzone ARNIE user manual</ListFile>
              <ListFile link={cnmFile}>Crashzone NTAR user manual</ListFile>
              <ListFile link={cumfoFile}>Crashzone ORM user manual</ListFile>
              <ListFile link={pumFile}>Crashzone PNET4 user manual</ListFile>
              <ListFile link={cxumFile}>Crashzone Xero user manual</ListFile>
              <ListFile link={cmeumFile}>
                Crashzone MYOB export user manual
              </ListFile>
              <ListFile link={sabumFile}>
                Crashzone Supplier Address Book user manual
              </ListFile>
            </ul>
          </div>
        </div>
        <div className="col-12 col-lg-5 ">
          <div className="bg-light px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Help</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Video
                </li>
              </ol>
            </nav>
            <ul className="nav flex-column">
              <ListVideo link={howDoIStartANewQuote}>
                How do I start a new quote
              </ListVideo>
              <ListVideo link={howDoIWriteTheQuote}>
                How Do I Write The Quote
              </ListVideo>

              <ListVideo link={howDoIPrintAQuote}>
                How do I Print A Quote
              </ListVideo>
              <ListVideo link={howDoIEmailAQuote}>
                How do I Email A Quote
              </ListVideo>
              <ListVideo link={howDoIOrderParts}>
                How do I order parts
              </ListVideo>
            </ul>
          </div>
          <div className="bg-light mt-3 px-3">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="">Help</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Remote
                </li>
              </ol>
            </nav>
            <div className="remote-support">
              <p>
                <a href="https://download.teamviewer.com/download/TeamViewer_Setup.exe">
                  CZ support
                </a>
              </p>
              <p>
                <a href={CrashzoneDebuger}>Estimate support</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
