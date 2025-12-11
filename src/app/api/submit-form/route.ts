import { NextRequest, NextResponse } from "next/server";

// URL do Google Apps Script Web App
// Você precisa criar um script no Google Sheets e publicar como Web App
// Instruções em: GOOGLE_SHEETS_SETUP.md
const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL || "";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validar campos obrigatórios
    const requiredFields = [
      "nome",
      "email",
      "whatsapp",
      "formacao",
      "cep",
      "cidade",
      "estado",
      "area",
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Campo obrigatório: ${field}` },
          { status: 400 }
        );
      }
    }

    // Adicionar timestamp
    const dataToSend = {
      ...body,
      data: new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }),
    };

    // Enviar para Google Sheets via Apps Script
    if (GOOGLE_SCRIPT_URL) {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        console.error("Erro ao enviar para Google Sheets:", await response.text());
      }
    } else {
      console.warn("GOOGLE_SCRIPT_URL não configurada. Dados recebidos:", dataToSend);
    }

    return NextResponse.json({ success: true, message: "Dados enviados com sucesso!" });
  } catch (error) {
    console.error("Erro no servidor:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
