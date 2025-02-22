import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:3030/api",
	withCredentials: true,
});

export const login = async (email, password) => {
	try {
		const response = await api.post("/users/login", { email, password });
		console.log("Resposta do login:", response.status);
		localStorage.setItem("user", email);
	} catch (error) {
		console.log(error.response?.data);
		console.error("Erro ao fazer login:", error);

		if (error.response) {
			const errorMessage =
				error.response.data?.message || "Ocorreu um erro inesperado.";
			if (error.response.status === 401) {
				if (errorMessage.includes("senha")) {
					throw new Error("Senha Incorreta");
				} else if (errorMessage.includes("email")) {
					throw new Error("Conta inexistente");
				}
			} else if (error.response.status === 404) {
				throw new Error("Conta inexistente");
			}
		}
		throw new Error("Ocorreu um erro inesperado.");
	}
};

export const register = async (name, email, password, role = "user") => {
	console.log({ name, email, password, role });
	try {
		const response = await api.post("/users/", {
			name,
			email,
			password,
			role,
		});
		console.log(response.status);
		return response.data;
	} catch (error) {
		throw new Error("Erro ao cadastrar. Tente novamente.");
	}
};

export const updateUser = async (id, data) => {
	try {
		const response = await api.put(`/users/${id}`, data);
		console.log("Resposta da atualização:", response.status);
	} catch (error) {
		console.log(error.response?.data);
		console.error("Erro ao atualizar usuário:", error);

		if (error.response) {
			const errorMessage =
				error.response.data?.message || "Ocorreu um erro inesperado.";
			throw new Error(errorMessage);
		} else {
			throw new Error("Ocorreu um erro inesperado.");
		}
	}
};

export const logout = async () => {
	try {
		await api.post("/users/logout");
		return "Fez logout com sucesso";
	} catch (error) {
		console.log(error.response?.data);
		console.log("Erro ao fazer logout", error);
		throw Error("Logout falhou");
	}
};

export async function getArtist(artistId) {
	try {
		const response = await api.get(`/artists/${artistId}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao obter o artista", error);
		throw error;
	}
}

export async function getArtistTracks(artistId) {
	try {
		const response = await api.get(`/songs/artist/${artistId}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao obter as tracks do artista", error);
		throw error;
	}
}

export async function getCurrentUser() {
	try {
		const user = await api.get("/users/user");
		return user.data;
	} catch (error) {
		console.error("Erro ao obter o usuário atual", error);
		throw error;
	}
}

/**
 *
 * @param {Number} songId
 */
export async function likeSong(songId) {
	try {
		const response = await api.post(`/users-songs/${songId}`);
		return response.status;
	} catch (error) {
		console.error("Erro ao curtir a música", error);
		throw error;
	}
}
/**
 *
 * @param {Number} songId
 */
export async function unlikeSong(songId) {
	try {
		const response = await api.delete(`/users-songs/${songId}`);
		return response.status;
	} catch (error) {
		console.error("Erro ao descurtir a música na api", error);
		throw error;
	}
}

/**
 *
 * @param {Number} userId
 */
export async function getUserLikedSongs(userId) {
	try {
		const response = await api.get(`/users-songs/users/${userId}`);
		return response.data;
	} catch (error) {
		console.error("Erro ao obter músicas curtidas do usuário", error);
		throw error;
	}
}
