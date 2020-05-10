// Example of how you would create a table and add data to it
// Import from 'docx' rather than '../build' if you install from npm
import * as fs from "fs";
import { Document, HeadingLevel, Packer, Paragraph, Table, TableCell, TableRow, VerticalAlign, TextDirection } from "../build";

const doc = new Document();

const table = new Table({
    rows: [
        new TableRow({
            children: [
                new TableCell({
                    children: [new Paragraph({}), new Paragraph({})],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({}), new Paragraph({})],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [new Paragraph({text: "bottom to top"}), new Paragraph({})],
                    textDirection: TextDirection.BOTTOMTOTOPLEFTTORIGHT
                }),
                new TableCell({
                    children: [new Paragraph({text: "top to bottom"}), new Paragraph({})],
                    textDirection: TextDirection.TOPTOBOTTOMRIGHTTOLEFT
                }),
            ],
        }),
        new TableRow({
            children: [
                new TableCell({
                    children: [
                        new Paragraph({
                            text:
                                "Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah",
                            heading: HeadingLevel.HEADING_1,
                        }),
                    ],
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "This text should be in the middle of the cell",
                        }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Text above should be vertical from bottom to top",
                        }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                }),
                new TableCell({
                    children: [
                        new Paragraph({
                            text: "Text above should be vertical from top to bottom",
                        }),
                    ],
                    verticalAlign: VerticalAlign.CENTER,
                }),
            ],
        }),
    ],
});

doc.addSection({
    children: [table],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("My Document.docx", buffer);
});
