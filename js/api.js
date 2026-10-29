const URL_BASE = "http://localhost:3000";

const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`);
      return await response.json();
    } catch {
      alert("Não foi possível buscar os pensamentos.");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Não foi possível salvar o pensamento.");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`);
      return await response.json();
    } catch {
      alert("Não foi possível buscar o pensamento.");
      throw error;
    }
  },

  async editarPensamento(pensamento) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${pensamento.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Não foi possível editar o pensamento.");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`${URL_BASE}/pensamentos/${id}`, {
        method: "DELETE",
      });
    } catch {
      alert("Não foi possível excluir o pensamento.");
      throw error;
    }
  },
};

export default api;
